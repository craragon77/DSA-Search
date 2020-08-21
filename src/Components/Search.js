import React, {Component} from 'react';
import FourOFour from './404';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            linearValue: '',
            binaryValue: ''
        }
    }
    handleChange = (e) => {
        console.log('the handle click has activated')
        this.setState({
            linearValue: e.target.value
        })
    }
    handleBinaryChange = (e) => {
        console.log('the binary change thingy has activated');
        this.setState({
            binaryValue: e.target.value
        })
    }
    linearSearch = (e, linearValue) =>{
        e.preventDefault();
        //console.log(this.state.linearValue)
        const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
        for (let i = 0; i < array.length; i++){
            //console.log(array[i])
            //why isn't the if statement being called ¿wtf?
            if(array[i] === Number(this.state.linearValue)){
                console.log("found something!")
                console.log(i)
            }
        }
        return FourOFour;
    }
    binarySearch = (e) => {
        e.preventDefault();
        const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
        let start = start === undefined ? 0 : start;
        let end = end === undefined ? array.length : end;
        console.log(start, end)
        if (start > end){
            return -1
        }

        const index = Math.floot((start + end) / 2);
        const item = array[index];

        if (item == this.state.binaryValue){
            return index;
        }
        else if (item < this.state.binaryValue){
            return this.binarySearch(e)
        }
        else if (item > this.state.binaryValue){
            return this.binarySearch(e)
        }
        
    }
    render(){
        return(
            <>
                <div>
                    <form onSubmit = {this.linearSearch}>
                        <label for="value">Value (Linear Search)</label>
                        <input type="number" id = "search" value={this.state.linearValue} onChange = {this.handleChange} required/>
                        <button>Submit!</button>
                    </form>
                </div>
                <div>
                    <form onSubmit = {this.binarySearch}>
                        <label for="value">Value (Binary Search)</label>
                        <input type="number" id = "search" value={this.state.binaryValue} onChange = {this.handleBinaryChange} required/>
                        <button>Submit!</button>
                    </form>
                </div>
                
            </>
            
        )
        
    }
}