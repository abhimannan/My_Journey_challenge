package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

public class Nonrepeatingcharacter {
    public static int countNonrepeatingChars(String s) {
        int  N = s.length();
        int[] frequency = new int[26];
        // storing the frequency of the each string
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(ch >= 'a' && ch<='z') { // condition for ignore the spaces
                frequency[ch-'a'] += 1;
            } 
        }
        // finding the non repeating character
        for(int i=0;i<N;i++) {
            char ch = s.charAt(i);
            if(ch>='a' && ch<='z' && frequency[ch-'a']==1) {
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) { 
        String s = "abhi";
        int index = countNonrepeatingChars(s);
        System.out.println(index);

    }
}
