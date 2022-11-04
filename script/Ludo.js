export default class {
    constructor(ludo){
        this.ludo = ludo
        this.dir = [15,15]
        this.box = [1,2,3,4,5,6]
        this.centerColor = 'pink'
        // the plear color 
        this.plearColor = ['green', 'red', 'blue','yellow'] 
    }
    createDesing(){
        this.box.forEach((element, index)=>{
            this.createElement(7, index, 'div', `boxtop${index}`, 'box')
            if(index == 3){
                this.createElement(7, index, 'div', `boxtop${index}`, 'box',this.plearColor[3])

            }
            this.createElement(8, index, 'div', `boxtop${index}`, 'box', this.plearColor[3])
            if(index == 1){
                this.createElement(8, index, 'div', `boxtop${index}`, 'box','white')

            }
            this.createElement(9, index, 'div', `boxtop${index}`, 'box')
            if(index == 2){
                this.createElement(9, index, 'div', `boxtop${index}`, 'box',this.plearColor[3])

            }
            this.createElement(index, 7, 'div', `box${index}`, 'box')
            if(index == 2){
                this.createElement(index, 7, 'div', `box${index}`, 'box',this.plearColor[0])

            }
            this.createElement(index, 8, 'div', `box${index}`, 'box',this.plearColor[0])
            if(index == 1){
                this.createElement(index, 8, 'div', `box${index}`, 'box','white')

            }
            this.createElement(index, 9, 'div', `box${index}`, 'box')
            if(index == 3){
                this.createElement(index, 9, 'div', `box${index}`, 'box',this.plearColor[0])

            }


            this.createElement(7, 10 + index, 'div', `boxbuttom${index}`, 'box')
            if(index == 4){
                this.createElement(7, 10 + index, 'div', `boxbuttom${index}`, 'box', 'red')
            }

            this.createElement(8, 10 + index, 'div', `boxbuttom${index}`, 'box','red')
            if(index == 5){
                this.createElement(8, 10 + index, 'div', `boxbuttom${index}`, 'box', 'white')
            }

            this.createElement(9, 10 + index, 'div', `boxbuttom${index}`, 'box')
            if(index == 3){
                this.createElement(9, 10 + index, 'div', `boxbuttom${index}`, 'box', 'red')
            }

            
            this.createElement(10 + index,7, 'div', `boxbuttom${index}`, 'box')
            if(index == 3){
                this.createElement(10 + index,7, 'div', `boxbuttom${index}`, 'box',this.plearColor[2])
            }
            this.createElement(10 + index,8, 'div', `boxbuttom${index}`, 'box',this.plearColor[2])
            if(index == 5){
                this.createElement(10 + index,8, 'div', `boxbuttom${index}`, 'box','white')
            }
            this.createElement(10 + index,9, 'div', `boxbuttom${index}`, 'box')
            if(index == 4){
                this.createElement(10 + index,9, 'div', `boxbuttom${index}`, 'box',this.plearColor[2])
            }
            
        })
        
    }
    plearHomeDesing(x, bg){
        x.forEach((element, index)=>{
            this.createElement(index,1, 'div', 'center1','1',this.plearColor[0])
            this.createElement(index,2, 'div', 'center1','1',this.plearColor[0])
            this.createElement(index,3, 'div', 'center1','1',this.plearColor[0])
            this.createElement(index,4, 'div', 'center1','1',this.plearColor[0])
            this.createElement(index,5, 'div', 'center1','1',this.plearColor[0])
            this.createElement(index,6, 'div', 'center1','1',this.plearColor[0])

            if(index == 3){
                this.createElement(2,5, 'div', 'center1','stoine',this.plearColor[0] ,'1')
                this.createElement(3,5, 'div', 'center1','stoine',this.plearColor[0] ,'2')
                this.createElement(4,5, 'div', 'center1','stoine',this.plearColor[0] ,'3')
                this.createElement(5,5, 'div', 'center1','stoine',this.plearColor[0] ,'4')
            }


            this.createElement(index,10, 'div', 'center1','1',this.plearColor[1])
            this.createElement(index,11, 'div', 'center1','1',this.plearColor[1])
            this.createElement(index,12, 'div', 'center1','1',this.plearColor[1])
            this.createElement(index,13, 'div', 'center1','1',this.plearColor[1])
            this.createElement(index,14, 'div', 'center1','1',this.plearColor[1])
            this.createElement(index,15, 'div', 'center1','1',this.plearColor[1])

            if(index == 3){
                this.createElement(5,11, 'div', 'center1','stoine',this.plearColor[1] ,'4')
                this.createElement(5,12, 'div', 'center1','stoine',this.plearColor[1] ,'3')
                this.createElement(5,13, 'div', 'center1','stoine',this.plearColor[1] ,'2')
                this.createElement(5,14, 'div', 'center1','stoine',this.plearColor[1] ,'1')
            }

            this.createElement(10,index, 'div', 'center1','1',this.plearColor[3])
            this.createElement(11,index, 'div', 'center1','1',this.plearColor[3])
            this.createElement(12,index, 'div', 'center1','1',this.plearColor[3])
            this.createElement(13,index, 'div', 'center1','1',this.plearColor[3])
            this.createElement(14,index, 'div', 'center1','1',this.plearColor[3])
            this.createElement(15,index, 'div', 'center1','1',this.plearColor[3])

            if(index == 3){
                this.createElement(11,2, 'div', 'center1','stoine',this.plearColor[3] ,'1')
                this.createElement(11,3, 'div', 'center1','stoine',this.plearColor[3] ,'2')
                this.createElement(11,4, 'div', 'center1','stoine',this.plearColor[3] ,'3')
                this.createElement(11,5, 'div', 'center1','stoine',this.plearColor[3] ,'4')
            }

            this.createElement(10,index + 10, 'div', 'center1','1',this.plearColor[2])
            this.createElement(11,index + 10, 'div', 'center1','1',this.plearColor[2])
            this.createElement(12,index + 10, 'div', 'center1','1',this.plearColor[2])
            this.createElement(13,index + 10, 'div', 'center1','1',this.plearColor[2])
            this.createElement(14,index + 10, 'div', 'center1','1',this.plearColor[2])
            this.createElement(15,index + 10, 'div', 'center1','1',this.plearColor[2])


            if(index == 3){
                this.createElement(11,1 + 10, 'div', 'center1','stoine',this.plearColor[2] ,'4')
                this.createElement(12,1 + 10, 'div', 'center1','stoine',this.plearColor[2] ,'3')
                this.createElement(13,1 + 10, 'div', 'center1','stoine',this.plearColor[2] ,'2')
                this.createElement(14,1 + 10, 'div', 'center1','stoine',this.plearColor[2] ,'1')
            }
        })
    }
    createCenter(){
        this.createElement(8,7, 'div', 'center1','1',this.centerColor)
        this.createElement(9,7, 'div', 'center1','1',this.centerColor)
        this.createElement(9,8, 'div', 'center1','1',this.centerColor)
        this.createElement(9,9, 'div', 'center1','1',this.centerColor)
        this.createElement(8,9, 'div', 'center1','1',this.centerColor)
        this.createElement(8,8, 'div', 'center1','1','hotpink')
        this.createElement(7,8, 'div', 'center1','1',this.centerColor)
        this.createElement(7,7, 'div', 'center1','1',this.centerColor)
        this.createElement(7,9, 'div', 'center1','1',this.centerColor)
    }



    createElement(x = 1, y=1, name = 'div', id='',cls='', bg='white', Text=''){
        let element = document.createElement(name)
        element.id = id
        element.classList = cls
        element.style.gridColumnStart = x
        element.style.gridRowStart = y
        element.style.background = bg
        element.innerText = Text
        this.ludo.appendChild(element)
    }
}
