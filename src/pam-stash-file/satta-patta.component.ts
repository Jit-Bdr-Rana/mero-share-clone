import { Component, OnInit, Injector, Input, EventEmitter, Output } from '@angular/core';
import { LikhatController } from 'src/app/system/likhat/likhat-controller';
import { ActivatedRoute } from '@angular/router';
import { CurrentUser } from 'src/app/shared/services/auth/current-user.service';
import { LikhatService } from 'src/app/system/likhat/services/likhat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-satta-patta',
  templateUrl: './satta-patta.component.html',
  styleUrls: ['./satta-patta.component.css']
})
export class SattaPattaComponent extends LikhatController implements OnInit {
  /**
   * Component Input Parameters
   */
  @Input() public printRefNo: string;

  /**
   * On Contact Found Emits data to parent component
   *
   * @type {EventEmitter<Object>}
   * @memberof LikhatTemplateComponent
   */
  @Output() public printButtonStatus: EventEmitter<Object> = new EventEmitter();

  @Output() getRouteDatas: EventEmitter<any> = new EventEmitter();

  actualRefNo: string;
  activeUser: string;
  showBCode: boolean = true;
  currentRoute: string;
  kittaStatus: boolean;
  printCountList = [];
  propertiesList: Array<Object> = [];
  applicantList: Array<Object> = [];
  landList: Array<Object> = [];
  // public likhatPrintCount: number = 0;
  likhatPrint: any;
  kittaCountArr: any;
  guardianList: any;
  otherDetails: any;
  landOwnerOrgList: any;
  applicantPresent: boolean = false;
  guardianPresent: boolean = false;
  landOwnerPresent: boolean = false;
  nomineePresent: boolean = false;
  likhatPrintStatus: boolean;
  public likhatPrintCount: number = 0;

  constructor(
    public injector: Injector,
    public activatedRoute: ActivatedRoute,
    public currentUser: CurrentUser,
    public likhatService: LikhatService) {
    super(injector)
  }

  public ngOnInit(): void {
    this.getRouteData();
    // set current route
    this.currentRoute = this.activatedRoute.url["value"][0].path;
    this.printButtonStatus.emit(true);
    this.likhatPrintStatus = false;
    if (this.activeRoute.snapshot.url[0].path == "satta-patta") {
      this.likhatPrintStatus = true;
      this.activeRoute.params.subscribe((params) => {
        if (params["data"] != undefined) {
          let data = JSON.parse(atob(params["data"]));
          this.actualRefNo = data["refNo"];
          this.getReportData(atob(params["data"]));
          this.getRouteDatas.emit(this.routeData); 
        }
      });
    }
  }

  getReportData(data) {
    data = JSON.parse(data);
    let templateUrl = `app/template/print/${data["refNo"]}`
    this.http.get(`${environment.stagingURL}${templateUrl}`).subscribe(
      (response) => {
        this.likhatPrint = response['data']
        this.kittaCountArr = Array(response["data"]["kittaCount"])
          .fill(0)
          .map((x, i) => i);
          console.log("likhat print",this.likhatPrint)
         this.likhatPrint['landDetails']['LANDOWNER1'].map((landDetail:any,index:number)=>{
            
          landDetail['kittaDetails'].length>0 && landDetail['kittaDetails'].map((kittaData:any,indexKitta:number)=>{
              if(landDetail['property']['CONTACTID']==kittaData['contactId']){
                this.likhatPrint['landDetails']['LANDOWNER1'][index]['kittaDetails'][indexKitta]['contacttypeid']=2;
                this.likhatPrint['landDetails']['LANDOWNER1'][index]['kittaDetails'][indexKitta]['contacttype']="Seller";
              }else{
                this.likhatPrint['landDetails']['LANDOWNER1'][index]['kittaDetails'][indexKitta]['contacttypeid']=1;
                this.likhatPrint['landDetails']['LANDOWNER1'][index]['kittaDetails'][indexKitta]['contacttype']="Buyer";  
              }
          })
          
         })

          this.likhatPrint['landDetails']['LANDOWNER2'].map((landDetail:any,index:number)=>{
          landDetail['kittaDetails'].length>0 && landDetail['kittaDetails'].map((kittaData:any,indexKitta:number)=>{
              if(landDetail['PROPERTYDETAILS']['CONTACTID']==kittaData['contactId']){
                this.likhatPrint['landDetails']['LANDOWNER2'][index]['kittaDetails'][indexKitta]['contacttypeid']=2;
                this.likhatPrint['landDetails']['LANDOWNER2'][index]['kittaDetails'][indexKitta]['contacttype']="Seller";
              }else{
                this.likhatPrint['landDetails']['LANDOWNER2'][index]['kittaDetails'][indexKitta]['contacttypeid']=1;
                this.likhatPrint['landDetails']['LANDOWNER2'][index]['kittaDetails'][indexKitta]['contacttype']="Buyer";  
              }
          })
         })
           console.log("likhat print",this.likhatPrint);
       
      }),
      (error) => {
        this.lobiBoxNotify.notice("notify", "mini", "Server Error");
      };
  }

  /**
   * Check if the Landowner is Organization
   * @param personDetail : Data for buyer/seller person
   * @param orgDetail : Data for buyerOrg/SellerOrg
   */
  public isLandownerOrganization(personDetail: any, orgDetail: any) {
    if (!(personDetail.length > 0) && orgDetail.length > 0)
      return true
    else
      return false
  }

}
