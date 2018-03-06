import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {
    dataset: Array<any> = null;
    user:string;

    constructor(private httpservice:HttpService){}

    ngOnInit() {
        this.user = sessionStorage.getItem('userName')
        this.httpservice.get('getuser').then((res) => {
            this.dataset = res;
            console.log(this.dataset)
        })
    }
    getkeys(item){
        return Object.keys(item)
    }
    deleteUser(id){
        let pageParams = {};
        pageParams['page'] = id;
        pageParams['user'] = this.user;
        this.httpservice.get('usertype',pageParams).then((res) => {
            if(res[0].type == 0){
                return alert('您当前没有全选操作权限')
            }else if(res[0].type == 1){
                for(let i=0;i<this.dataset.length;i++){
                    if(this.dataset[i].userid == id){
                        this.dataset.splice(i,1)
                    }
                }
                
                this.httpservice.get('updateuser',pageParams).then((res) => {
                    console.log(this.dataset.userid)
                })
            }
        })
    }
    redact(id){
        let pageParams = {};
        pageParams['page'] = id;
        pageParams['user'] = this.user;
        this.httpservice.get('usertype',pageParams).then((res) => {
            if(res[0].type == 0){
                return alert('您当前没有全选操作权限')
            }else if(res[0].type == 1){
                
                //this.httpservice.get('updateuser',pageParams).then((res) => {
                    //console.log(this.dataset.userid)
                //})
            }
        })
    }
}
