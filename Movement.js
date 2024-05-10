AFRAME.registerComponent("model-movement",{
    schema:{
        speedOfAscent: { type: "number", default: 0 }
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfAscent = this.el.getAttribute("position")

            var modelPosition = this.data.speedOfAscent

            if(e.key === "8"){
                modelPosition.z += 0.5
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "5"){
                modelPosition.z -= 0.5
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "4"){
                modelPosition.x += 0.5
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "6"){
                modelPosition.x -= 0.5
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "p"){
                modelPosition.y += 0.5
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "l"){
                modelPosition.y -= 0.5
                this.el.setAttribute("position",modelPosition)
            }
        })
    }
})