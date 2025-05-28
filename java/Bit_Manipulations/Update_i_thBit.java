public class Update_i_thBit {
    public static int clear(int n,int i) {
        return n & ~(1<<i);
    }
    public static int set(int n,int i) {
        return n | (1<<i);
    }
    public static int update(int n,int i,int newBit) { // newbit = 0 (or) 1
        if(newBit==0) {
            return clear(n, newBit);
        }
        else{
            return set(n, newBit);
        }
    }
    public static void main(String[] args) {
        int res = update(10, 2, 1);
        System.out.println(res);
    }
}
