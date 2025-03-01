
public class Sum {
    public static int add(int n){
         // reverse the num
         int sum = 0;
         while(n>0){
            int lastDigit = n%10;
            sum=sum+lastDigit;
            n=n/10;
         }
         return sum;
    }
    public static void main(String[] args) {
        int res = add(1111);
        System.out.println(res);
    }
}
