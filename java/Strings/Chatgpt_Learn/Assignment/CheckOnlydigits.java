package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

public class CheckOnlydigits {
    
    public static boolean checkDigit(String name) {
         int N = name.length();
         for(int i=0;i<N;i++) {
            char ch = name.charAt(i);
            if(ch<'0' || ch>'9') {
                return false;
            }
         }
         return true;
    }
    public static void main(String[] args) {
        String name = "8980ags";
        System.out.println(checkDigit(name));
    }
}
