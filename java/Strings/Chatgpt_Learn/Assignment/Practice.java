package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

// import Strings.Polindrome;

public class Practice {
    public static void Reverse(StringBuilder sb) {
        int N = sb.length();
        for(int i=0;i<sb.length()/2;i++) {
            int startPos = i;
            int endPos = N-i-1;
            char startChar = sb.charAt(startPos);
            char endChar = sb.charAt(endPos);
            sb.setCharAt(startPos,endChar);
            sb.setCharAt(endPos,startChar);
        }
        System.out.println(sb);
    }
    public static boolean Poli(String name) {
        int N = name.length();
        for(int i=0;i<N/2;i++) {
            char startChar = name.charAt(i);
            char endChar = name.charAt(N-i-1);
            if(startChar!=endChar) {
                return false;
            }
        }
        return true;
    }
    public static void CountVowels(String name) {
        int N = name.length();
        int VowelsCount = 0;
        int ConsonentCount = 0;
        for(int i=0;i<N;i++) {
            char letter = name.charAt(i);
            if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u') {
                 VowelsCount++;
            }
            else{
                ConsonentCount++;
            }
        }
        System.out.println("Vowels = "+ VowelsCount + "Consonents = "+ConsonentCount);
        
    }
    public static void main(String[] args) {
        // StringBuilder sb = new StringBuilder("abcd");
        // Reverse(sb);
        String name = "abba";
        System.out.println(Poli(name));
        CountVowels(name);

    }
}
