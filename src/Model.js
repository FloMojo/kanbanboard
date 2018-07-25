

class Model{
    constructor(){
        this.setItemNextStep = this.setItemNextStep.bind(this);

        this.id = 1;
        this.data = {
            backlog : {
                items : [ 
                {id : this.getId(),text : 'BL1'},
                {id : this.getId(),text : 'BL2'},
                {id : this.getId(),text : 'BL3'}
                ],
                name : "Backlog"
            },
            ready : { 
                items : [
                {id : this.getId(),text : 'R1'},
                {id : this.getId(),text : 'R2'},
                {id : this.getId(),text : 'R3'}
                ],
                name : "Ready"
            },
            coding: { 
                items : [
                {id : this.getId(),text : 'CO1'},
                {id : this.getId(),text : 'CO2'},
                {id : this.getId(),text : 'CO3'}
                ],
                name : "Coding"
            },
            test: 
                {
                items : [
                {id : this.getId(),text : 'T1'},
                {id : this.getId(),text : 'T2'},
                {id : this.getId(),text : 'T3'}            
                ],
                name : "Test"
            },
            done: {
                items : [
                {id : this.getId(),text : 'D1'},
                {id : this.getId(),text : 'D2'},
                {id : this.getId(),text : 'D3'}
                ],
                name : "Done"
            }
        };
    }

    getId(){
        return this.id++;
    }

    setItemNextStep(itemId){
        var elementFound = null;
        var data = this.data;
        var stop = false;
        console.log(`Item ${itemId} clicked`);

        for (var section in data){
            console.log(section);
            if (!stop){
                if(elementFound === null){
                    data[section].items = data[section].items.map(element => {
                        if(itemId === element.id){
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
                    data[section].items.push(elementFound);
                    elementFound = null;
                    stop = true;
                }
            }
        }

        console.log(data);
    }

    getData(){
        return this.data;
    }
}

export default Model;