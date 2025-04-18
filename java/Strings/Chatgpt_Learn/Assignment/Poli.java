package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

public class Poli {
    public static boolean checkPolindrome(String str) {
        int N = str.length();
        for(int i=0;i<str.length();i++) {
            if(str.charAt(i)!=str.charAt(N-1-i)) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String str = "abba";
        System.out.println(checkPolindrome(str));

    }
}
