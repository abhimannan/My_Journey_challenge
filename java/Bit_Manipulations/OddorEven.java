public class OddorEven {
    public static void CheckNum(int n) {
        int bitmask = 1;
        if((n & bitmask) == 0) {
            // even
            System.out.println("even");
        }
        else{
            // odd
            System.out.println("odd");
        }
    }
    public static void main(String[] args) {
        CheckNum(5);
    }
}
