public class Set_ith_bit {
    public static int SetBit(int n,int i) {
        int bitmask = 1<<i;
        return n | bitmask;
    }
    public static void main(String[] args) {
        int res = SetBit(10, 2);
        System.out.println(res);
    }
}
