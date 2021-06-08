import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public items = {
    israel: 972,
    usa: 1,
    uk: 44,
    ukraine: 380
  };

  ngOnInit(): void {

    // const items = this.items;
    // console.log(this.getAsSortedArray(items));

  }

  public getAsSortedArray(items: Object) {

    const objectArray: Array<Object> = this.createObjectToArray(items);

    return this.sortArray(objectArray);

  }

  private createObjectToArray(items: Object): Array<Object> {

    // return Object.entries(items).map((item) => ({ country: item[0], code: item[1] }));
    return Object.entries(items).map(([country, code]) => ({ country, code }));

  }

  private sortArray(array: Array<any>) {

    return array.sort((a, b) => b.code - a.code);

  }


  public me(): void {

    // const array = [1, 2, 3, 4, 5];
    // const obj = array.map(num => ({ num }));
    // console.log(obj);

    // const obj = {
    //   first: 'v1',
    //   second: 'v2',
    //   third: 'v3',
    //   fourth: 'v4',
    //   a: 'v5'
    // };

    // const array = Object.entries(obj).filter((key) => key[1] != 'v2');
    // console.log(array);

    // const array: Array<any> = Object.entries(obj);

    // array.sort((a, b) => a[1].localeCompare(b[1]));

    // console.log(array);

    // const arr = ['ron', 'adi', 'itzik', 'zorki', 'open'];
    // console.log(arr);
    // arr.sort();
    // console.log(arr);

    // const newObjWithIndex = arr.map((key, i) => ({ String(i): key }));
    // console.log(newObjWithIndex);

    // let obj2 = {
    //   0: 'adi',
    //   1: 'itzik'
    // }

    // console.log(obj2);
    // for (let index = 2; index < 5; index++) {

    //   obj2 = { ...obj2, ...{ index: `hh` } };
    // }
    // console.log(obj2);


    // const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    // const newArr = arr3.map((value, index) => ({ 'key': index, value }));
    // console.log(newArr);

    // const obj4 = {
    //   'dor': false,
    //   'moshe': false,
    //   'omer': true,
    //   'ron': false,
    //   'amit': true,
    //   'shoshi': false
    // }

    // const arr5 = Object.entries(obj4).map(value => ({ name: value[0], isSmart: value[1] })).sort((x, y) => x[0].localeCompare(y[0]));
    // const arr5 = Object.entries(obj4).map(([name, isSmart]) => ({ name, isSmart })).sort((x, y) => x.name.localeCompare(y.name));
    // console.log(arr5);

    // const duoArray = [['doron', 'itsik', 'ron', 'shmulik'], ['shani', 'shir', 'ronit', 'zila', 'adva'], ['sharon', 'omer', 'daniel']];
    // const sortLength = duoArray.sort((a, b) => a.length - b.length);
    // sortLength.forEach(arr => arr.sort());
    // console.log(sortLength);

    // const obj5 = {
    //   'dor': 15,
    //   'moshe': 20,
    //   'omer': 12,
    //   'ron': 9,
    //   'amit': 2,
    //   'shoshi': 17
    // }

    // const arr = Object.entries(obj5);
    // console.log(arr);


    // const arr8 = [11, 22, 33, 44, 55, 66];
    // const newArr = arr8.map((value, index) => ({ key: index, value }));
    // console.log(newArr);

    // const isPalindrome: boolean = this.isPalindrome('dodxXdod');
    // console.log(isPalindrome);


    // let val = {
    //   israel: 972,
    //   usa: 1,
    //   uk: 44,
    //   ukraine: 380
    // };

    // val['fu']=44;
    // Object.assign(val, { 'fu': 44 }, { 'f1': 45 });
    // val = { ...val, ...{ 'fu': 44, 'f1': 45 } };
    // console.log(val);


    const items = {
      israel: 972,
      usa: 1,
      uk: 44,
      ukraine: 380
    };
    console.log(items);

    const removeByPrefix: Object = this.removeByPrefix(items, 'uk');
    console.log(removeByPrefix);

  }

  public removeByPrefix(items: any, str: string): Object {

    // way 1
    // const array: Array<Array<any>> = Object.entries(items).filter(([key]) => !key.startsWith(str));
    // let newItems: object = {};
    // array.forEach(([key, value]) => newItems = { ...newItems, [key]: value });
    // return newItems;

    // way 2

    Object.keys(items).filter(key => key.startsWith(str)).forEach(item => delete items[item]);
    return items;

  }

  // public isPalindrome(value: string): boolean {

  //   value = value.toLowerCase();
  //   while (value.length > 1) {

  //     if (value.charAt(0) != value.charAt(value.length - 1))
  //       return false;

  //     value = value.substring(1, value.length - 1);
  //   }

  //   return true;
  // }

  // public isPalindrome(str: string): boolean {
  //   str = str.toLowerCase();

  //   return str == str.split('').reverse().join('');
  // }

}
