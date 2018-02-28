import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieRatings'
})
export class MovieRatingsPipe implements PipeTransform {

  transform(value: any): string {
    if(value > 0 && value < 1) {
      return "<i class='far fa-star-half'></i>"; // 1 Half Star
    } 
    else if(value == 1) {
      return "<i class='far fa-star'></i>"; // 1 Star
    } 
    else if(value > 1 && value < 2) {
      return "<i class='far fa-star'></i><i class='far fa-star-half'></i>"; // 1 & half 
    } 
    else if(value == 2) {
      return "<i class='far fa-star'></i><i class='far fa-star-half'></i>"; // 2 Stars
    } 
    else if(value > 2 && value < 3) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star-half'></i>"; // 2 & Half
    } 
    else if(value == 3) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i>"; // 3 Stars
    } 
    else if(value > 3 && value < 4) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star-half'></i>"; // 3 & Half
    } 
    else if(value == 4) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i>"; // 4 Stars
    } 
    else if(value > 4 && value < 5) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star-half'></i>"; // 4 & Half
    }
    else if(value == 5) {
      return "<i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i>"; // 5 Stars
    }
  }

}
