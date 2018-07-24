

class Model{
    constructor(){
        this.setItemNextStep = this.setItemNextStep.bind(this);

        this.id = 1;
        this.data = {
            backlog : [ 
                {id : this.getId(),text : 'BL1'},
                {id : this.getId(),text : 'BL2'},
                {id : this.getId(),text : 'BL3'}
            ],
            ready : [
                {id : this.getId(),text : 'R1'},
                {id : this.getId(),text : 'R2'},
                {id : this.getId(),text : 'R3'}
            ],
            coding: [
                {id : this.getId(),text : 'CO1'},
                {id : this.getId(),text : 'CO2'},
                {id : this.getId(),text : 'CO3'}
            ],
            test: [
                {id : this.getId(),text : 'T1'},
                {id : this.getId(),text : 'T2'},
                {id : this.getId(),text : 'T3'}
            ],
            done: [
                {id : this.getId(),text : 'D1'},
                {id : this.getId(),text : 'D2'},
                {id : this.getId(),text : 'D3'}
            ]
        };
    }

    getId(){
        return this.id++;
    }

    setItemNextStep(item){
        var elementFound = null;
        var data = this.data;
        var stop = false;
        console.log(data);

        for (var section in data){
            console.log(section);
            if (!stop){
                if(elementFound === null){
                    data[section] = data[section].map(element => {
                        if(item.id === element.id){
                            elementFound = element;
                            return null;
                        }else{
                            return element;
                        }
                    }).filter(nullElement => {
                        if(nullElement !== null){
                            return nullElement;
                        }
                    });
                }else{
                    data[section].push(elementFound);
                    elementFound = null;
                    stop = true;
                }
            }
        }
    }

    getData(){
        return this.data;
    }
}

export default Model;