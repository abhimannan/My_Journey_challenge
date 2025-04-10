import java.lang.reflect.Array;
import java.util.Arrays;

public class Anagram {
    public static void AnagramCheck(String str1,String str2) {
        // convert into lower case letters
        str1.toLowerCase();
        str2.toLowerCase();
        if(str1.length() == str2.length()){
            // convert string into char array
        char[] s1 = str1.toCharArray();
        char[] s2 = str2.toCharArray();
        // sort the array
        Arrays.sort(s1);
        Arrays.sort(s2);
        // check both the arrays are equal
        boolean result = Arrays.equals(s1,s2);
        if(result) {
            System.out.println("Anagram");
        }
        else{
            System.out.println("Not Anagram");
        }
        }
        else{
            System.out.println("Not Anagram");
        }
    }
    public static void main(String[] args) {
        String str1 = "care";
        String str2 = "Race";
        AnagramCheck(str1,str2);

    }
}
