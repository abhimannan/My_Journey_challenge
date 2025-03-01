public class Binary_to_decimal {
    public static void BtD(int binNum){
        int total_binNum = binNum;
         int power = 0;
         int decimal = 0;
         
         while(binNum>0){
             int lastDigit = binNum%10;
             decimal = decimal + (lastDigit*(int)(Math.pow(2,power)));
             power++;
             binNum=binNum/10;
         }
         System.out.print(total_binNum+"="+decimal);
    }
    public static void main(String[] args) {
        BtD(111);
    }
}
