package My_Journey_challenge.java.Strings.Chatgpt_Learn.Assignment;

public class CountVowels {
    public static void checkVowelsConsonents(String str) {
        str.toLowerCase();
        int vowelsCount = 0;
        int consonentCount = 0;
        for(int i=0;i<str.length();i++) {
            if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u') {
                 vowelsCount++;
            }
            else{
                consonentCount++;
            }
        }
        System.out.println("The vowels count = "+ vowelsCount);
        System.out.println("The consonents count = "+ consonentCount);
    }
    public static void main(String[] args) {
        String str = "abhi";
        checkVowelsConsonents(str);

    }
}
