import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions'
import styled from 'styled-components';


const FormStyle = styled.h1`
input{
  text-align: center;
}
input[type=text], select {
    padding: 20px;
    margin: 8px 12px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 0.5em;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
}

.MainInput{
  padding: 20px;
  margin-top:10px;
  font-size: 0.5em;

}
li{
  font-size: 0.75em;
  padding:2px;
  font-family: helvetica;
  font-style: normal;
  font-weight: lighter;
  color:#AAA;

}
li.namelist{
  list-style-type: none;

}

`;

class AddCounter extends Component{

  render(){

    let input;
    let optionInput

    var lis = []
    var sum = 0
    for (var i=1; i<6; i++) {
    lis.push(<li key={i}>{i} : {this.props.values[i]}</li>);
    sum +=this.props.values[i];
    }
    lis.push(<li key={6}>Total : {sum}</li>);


    return(
      <FormStyle>
      <div>
         <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          if(this.props.names.includes(input.value.trim()+":"+optionInput.value)){
            window.alert("Duplicate entry");
            return
          }
          this.props.increment(optionInput.value,input.value);

          input.value = ''
        }}>
          <input ref={nod => input = nod} placeholder="Name" className="MainInput" />

          <select ref={node => optionInput = node} placeholder="Option">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br/>
          <button type="submit">
            Submit
          </button>
          <br />
          <br/>


          {lis}

        <br/>


          {this.props.names.map((name) =>
            <li key={name} className="namelist">
              {name}
            </li>
          )}
        </form>
      </div>
      </FormStyle>
    )
  }
}


function mapStateToProps (state){
  return({
          names:state.counter.names,
          values:state.counter.values,
        })
}


const mapDispatchToProps = (dispatch) => ({
  increment: (i,n) => dispatch(increment(i,n)),

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCounter)
