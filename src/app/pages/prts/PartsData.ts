


    export interface ClosureItem {
  date: string;
  subject: string;
}



export class PartsData {


    static GetD7tData() {
        let values = [
            { check: '1. Are the correct Best People Practice Sheets/JES/ALBS/posted/available?', isChecked: '', },
            { check: '2. Are the completed vehicle inspection sheets/quality standardsidentified and followed?', isChecked: '', },
            { check: '3. Are the operators job instructions being followed?', isChecked: '', },
            { check: '4. Are there visual aids present, current and being followed?', isChecked: '', },
            { check: '5. If there is a mandatory sequence identified, Is it being followed?', isChecked: '', },
            { check: '6. Was the operator properly trained on this operation?', isChecked: '', },
            { check: '7. Can the operator detect the issue/problem?', isChecked: '', },
            { check: '8. Does Operator know how to communicate issues/problems?', isChecked: '', },

        ]
        return values;
    }
    static getd1() {
        let values = [
            { check: '1. Are the correct Best People Practice Sheets/JES/ALBS/posted/available?', isChecked: '', yes: 'Yes', no: '' },
            { check: '2. Are the completed vehicle inspection sheets/quality standardsidentified and followed?', isChecked: '', yes: '', no: 'No' },
            { check: '3. Are the operators job instructions being followed?', isChecked: '', yes: 'Yes', no: 'No' },
            { check: '4. Are there visual aids present, current and being followed?', isChecked: '', yes: '', no: 'No' },
            { check: '5. If there is a mandatory sequence identified, Is it being followed?', isChecked: '', yes: 'Yes', no: '' },
            { check: '6. Was the operator properly trained on this operation?', isChecked: '', yes: '', no: 'No' },
            { check: '7. Can the operator detect the issue/problem?', yes: 'Yes', isChecked: '', no: '' },
            { check: '8. Does Operator know how to communicate issues/problems?', isChecked: '', yes: 'Yes', no: '' },

        ]
        return values;


    }
    static getd2() {
        let values = [
            { check: '1. Are the correct tools/fixtures being used?', isChecked: '', },
            { check: '2. Are the tools set to the specified torque?', isChecked: '', },
            { check: '3. Are the tools properly calibrated? Last calibration date__________', isChecked: '', },
            { check: '4. Are any bits or sockets worn or not in proper working condition?', isChecked: '', },
            { check: '5. This is the correct length of air hose with no extra sections added?', isChecked: '', },
            { check: '6. Are the tools rails, controllers, flow regulator connections correct?', isChecked: '', },
            { check: '7. Is the tool connected to the ANDON System properly?', isChecked: '', },
            { check: '8. If Error proofing is present, is it working correctly?', isChecked: '', },
            { check: '9. Does the workplace layout allow the Operator to work efficiently?', isChecked: '', },
            { check: '10. Has any required planned maintenance been performed?', isChecked: '', },
            { check: '11. Is the equipment working properly now?', isChecked: '', },

        ]
        return values;


    }
    static getd3a() {
        let values = [
            { check: '1. Do the Part numbers match the PAD/PIM sheets?', isChecked: '', },
            { check: '2. Are the correct part numbers being used?', isChecked: '', },
            { check: '3. Are the correct part numbers identified on the material racks?', isChecked: '', },
            { check: '4. Are the correct parts in the correct locations on the material racks?', isChecked: '', },
            { check: '5. Do the part numbers on the boxes as per the parts in the boxes?', isChecked: '', },
            { check: '6. If a Temporary Work Order/ limited deviation has been issued, Is it still in effect?', isChecked: '', },
            { check: '7. Can the parts be selected correctly on a consistent basis?', isChecked: '', },


        ]
        return values;


    }
    static getd3b() {
        let values = [
            { check: '1. Do packaging as per defined packaging sign off', isChecked: '', },
            { check: '2. Kitting followed as per standard?', isChecked: '', },
            { check: '3. Possibility of handling damage', isChecked: '', },
            { check: '4. Location for storage at Wearhouse is defined', isChecked: '', },
            { check: '5. Location at lineside defined', isChecked: '', },
            { check: '6. Defined sequence is being followed?', isChecked: '', },



        ]
        return values;


    }
    static getd4() {
        let values = [
            {
                check: '1. Problem follows part when swapped between Best of Best/Worst of Worst vehicles?', isChecked: '',
            },
            { check: '2. Is the current Data/analysis data available?', isChecked: '', },
            { check: '3. Do the parts meet specification?', isChecked: '', },
            {
                check: '4. Has a PR&R been issued, and supplier contacted? PRR#___________', isChecked: '',
            },
            { check: '5. Are the parts within specification and still causing the problem?', isChecked: '', },




        ]
        return values;


    }
    static getd5() {
        let values = [
            {
                check: '1. Problem follows part when swapped between Best of Best/Worst of Worst vehicles?', isChecked: '',
            },
            { check: '2. Is the current Data/analysis data available?', isChecked: '', },
            { check: '3. Do the parts meet specification?', isChecked: '', },
            {
                check: '4. Has a PR&R been issued, and supplier contacted? PRR#___________', isChecked: '',
            },
            { check: '5. Are the parts within specification and still causing the problem?', isChecked: '', },




        ]
        return values;


    }
    static workflow() {
        let values = [
            { stage: 'D1', title: 'Process', status: 'Assigned', isChecked: '', lastupdated: '19/11/2022', updatedby: 'Navin' },
            { stage: 'D2', title: 'Tool', status: 'WIP', isChecked: '', lastupdated: '18/01/2019', updatedby: 'surya' },
            { stage: 'D3A', title: 'Production', status: 'WIP', isChecked: '', lastupdated: '23/04/2021', updatedby: 'Satya' },
            { stage: 'D3B', title: 'SQM', status: 'Assigned', isChecked: '', lastupdated: '02/06/2021', updatedby: 'Vamshi' },
            { stage: 'D4A', title: 'Internal Quality Control', status: 'Assigned', isChecked: '', lastupdated: '14/01/2021', updatedby: 'Abhishek' },
            { stage: 'D4B', title: 'Supplier Part Quality', status: 'Done', isChecked: '', lastupdated: '07/12/2021', updatedby: 'Sourabh' },
            { stage: 'D5', title: 'Process ENG', status: 'Done', isChecked: '', lastupdated: '29/09/2022', updatedby: 'Radha Krishna' },
            { stage: 'D6', title: 'Product ENG', status: 'WIP', isChecked: '', lastupdated: '19/11/2020', updatedby: 'Preetham' },
            { stage: 'D7', title: 'CFT', status: 'Assigned', isChecked: '', lastupdated: '12/19/2021', updatedby: 'Satya' },


        ]
        return values;


    }
    static alert() {
        let values = [
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },

        ]
        return values;
    }
    static actionGrid() {
        let values = [
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: 'Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: ' Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: 'Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: 'Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: 'Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },
            { title: 'Lorm Ipsum', date: '22 Oct 2022', assign: 'Vamshi Krishna', agency: 'Agency 1', due: '22 oct 2022', Complexity: 'High' },

        ]
        return values;
    }
    static closur() {
        let values = [
            { date: '17-sep-2024,08:52 PM', subject: 'Quality Issue Resolution & Action Tracking' },
            { date: '10-oct-2025,10:30 AM', subject: 'Corrective Actions for Manufacturing Quality Deviations' },
            { date: '25-Jan-2026,06:13 PM', subject: 'Quality Improvement Action Plan (QIP)' },
            { date: '18-Jul-2026,07:55 AM', subject: 'Non-Conformance Resolution & Action Items' },
        ]
        return values;
    }
    static summary() {
        let values = [
            { date: '12-10-2022  09:50', stage: 'Initial', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Issue was added', done: 'Vishvajit jere' },
            {
                date: '12-10-2022  10:42', stage: 'Setup', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Workflow updated', done: 'Vamshi'
            },
            {
                date: '12-10-2022  18:30', stage: 'D1:process', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Checklist updates ', done: 'Snigdha'
            },

        ]
        return values;
    }
    static document() {
        let values = [
            { date: '17-sep-2020', subject: 'Engineering drawing updated' },
            { date: '17-sep-2020', subject: 'Engineering drawing updated' },
            { date: '17-sep-2020', subject: 'Engineering drawing updated' },
            { date: '17-sep-2020', subject: 'Engineering drawing updated' },
        ]
        return values;
    }
    static monitor() {
        let values = [
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },

        ]
        return values;
    }
    static diagnosis() {
        let values = [
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
        ]
        return values;
    }
    static fish() {
        let values = [
            { issue: 'Correct part numbers?' },
            { issue: 'Correct part numbers?' },
            { issue: 'Correct part numbers?' },
            { issue: 'Correct part numbers?' },
        ]
        return values;
    }


    


}
