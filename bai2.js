let Diem
do{
     Diem = +prompt("Nhập điểm")
}while(Diem >100 || Diem <0)
if( Diem < 48) {
    document.write(Diem +" : Không đạt")
}
else
if ( Diem %5 === 3) {
    
    document.write(Diem + " làm tròn thành " + (Diem +2) + " : Đạt")
}
else
    if( Diem %5 === 4) {
        document.write(Diem + " làm tròn thành " + (Diem +1) + " : Đạt")
}
else
    {
        document.write(Diem + ": Đạt")
    }