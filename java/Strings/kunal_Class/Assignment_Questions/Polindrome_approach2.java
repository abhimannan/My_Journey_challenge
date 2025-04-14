public class Polindrome_approach2 {
    // like binary search approach
    public static boolean checkPolindrome(String str) {
        int N = str.length();
        for(int i=0;i<N;i++) {
            char start = str.charAt(i);
            char end = str.charAt(N-1-i);
            if(start!=end) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String str = "abcba";
        System.out.println(checkPolindrome(str));
    }
}
