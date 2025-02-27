let a=+prompt("Moi ban nhap so ")
let b=+prompt("Moi ban nhap so ")
let c=+prompt("Moi ban nhap so ")

let delta=(b*b)-4*a*c  
  let x1=(-b+Math.sqrt(delta))/2*a
  let x2=(b+Math.sqrt(delta))/2*a
  document.write("Nghiệm của phương trình là ", x1, "và", x2 );