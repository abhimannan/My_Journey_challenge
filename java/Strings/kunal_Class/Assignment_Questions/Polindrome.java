public class Polindrome {
    public static boolean poli_check(String name) {
         int N = name.length();
         for(int i=0;i<N/2;i++) {
            if(name.charAt(i)!=name.charAt(N-1-i)) {
                return false;
            }
         }
         return true;
    }
public static void main(String[] args) {
    String name = "abccba";
    System.out.println(poli_check(name));
}
}