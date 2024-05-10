AFRAME.registerComponent("model-rotation",{
    schema:{
        speedOfRotation: { type: "number", default: 0 }
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfAscent = this.el.getAttribute("rotation")

            var modelRotation = this.data.speedOfAscent

            if(e.key === "y"){
                modelRotation.y += 0.5
                this.el.setAttribute("rotation",modelRotation)
            }
            if(e.key === "h"){
                modelRotation.y -= 0.5
                this.el.setAttribute("rotation",modelRotation)
            }
            if(e.key === "u"){
                modelRotation.x += 0.5
                this.el.setAttribute("rotation",modelRotation)
            }
            if(e.key === "i"){
                modelRotation.x -= 0.5
                this.el.setAttribute("rotation",modelRotation)
            }
        })
    }
})