var tl = gsap.timeline({scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"70% 60%",
        scrub:true,
        // markers:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left:"21%"
},'orange')

tl.to("#orange",{
    width:"18%",
    top:"165%",
    right:"10%"
},'orange')

tl.to("#leaf1",{
    top:"110%",
    rotate:"140deg",
    left:"70%"
},'orange')

tl.to("#leaf2",{
    top:"110%",
    rotate:"140deg",
    left:"0%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
    // markers:true,
}})
tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-110%",
    top:"120%"
}, 'ca')
tl2.from("#cocacola",{
    rotate:"90deg",
    left:"-110%",
    top:"100%"
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "-90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "41.5%",
    top: "208%"
}, 'ca')

tl2.to("#fanta",{
    width:"35%",
    top: "217%",
    left: "33%",
}, 'ca')
