public class Get_ith_bit {
    public static int Getbit(int n,int i) {
        if((n&(1<<i))==0) {
            return 0;
        }
        else{
            return 1;
        }
    }
    public static void main(String[] args) {
        int res = Getbit(15, 2);
        System.out.println(res);
    }
}
