import { Component, OnInit, Input,OnChanges, DoCheck} from '@angular/core';
import {HttpService} from '../../utils/http.service'
import {CommonService}  from '../../utils/common.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges,DoCheck {
     @Input() gid: number;
     @Input() api: string;
     columns : Array<string>;
     colsAttributes: Object = {};
     privateDic: Object = {};
     searchapi:string;
     dataset :Array<Object>=[];
     filterColumns: Array<string> = null;
     changeData:Object={};
  constructor(private http: HttpService, private common: CommonService) { }

  ngOnChanges() {
        console.log(this.gid,'gid');
        this.http.get(this.api).then((ConfigRes)=>{
            console.log(ConfigRes,'gooddetails');
            let cols = ConfigRes['cols'];
            this.columns = !cols || cols == '*' ? [] : cols.split(',');
            this.colsAttributes = ConfigRes['colsAttributes'] || {};
            this.searchapi=ConfigRes['searchapi'];
            let filterCols = ConfigRes['filterCols'];
            this.filterColumns = !filterCols ? [] : filterCols.split(',');
        })
        if(this.gid){
            this.http.get(this.searchapi,{"gid":this.gid}).then((res)=>{
                console.log('goosdetails',res);
                this.dataset=res;
                console.log(this.dataset);
            })
        }
  }
  ngOnInit(){}
   getKeys(item){
        return Object.keys(item);
    }
    getchange(key,e){
        console.log(key,e.target.value);
        this.changeData[key]=e.target.value;
        console.log(this.changeData);
    }
}
