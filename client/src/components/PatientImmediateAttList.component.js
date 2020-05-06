import React from 'react';
import PatientImmediateAtt from './PatientImmediateAtt.component';

class PatientImmediateAttList extends React.Component {
    constructor() {
        super();
        this.state = {
            immediateAttArray: [1, 2, 3]
        }
    }
    render() {
        const immediateAtt = this.state.immediateAttArray.map((elem) => {
            return(<PatientImmediateAtt patientID={elem}/>)
        });
        return(
            <div className="immediateAttList">
                {immediateAtt}
            </div>
        )
    }
}

export default PatientImmediateAttList