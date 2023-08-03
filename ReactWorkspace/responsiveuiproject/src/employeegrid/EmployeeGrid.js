import { EmployeeCard } from "../emloyeecard/EmployeeCard";
export function EmployeeGrid(){
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-sm-6 border border-4 border-success">
                        <EmployeeCard></EmployeeCard>
                    </div>
                    <div className="col-sm-6 border  border-4 border-success">
                        <EmployeeCard></EmployeeCard>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div className="row">
                    <div className="col-sm-6 border border-4 border-success">
                        <EmployeeCard></EmployeeCard>
                    </div>
                    <div className="col-sm-6 border  border-4 border-success">
                        <EmployeeCard></EmployeeCard>
                    </div>
                </div>
            </div>
        </div>
    );
}