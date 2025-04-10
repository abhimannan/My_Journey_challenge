
// to find the number of vowels in the string
class Vowels {
    public static boolean isVowel(char ch){
        return (ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u');
    }
    public static void main(String[] args) {
        String str = "abhi mannan";
        int count =0;
        for(int i=0;i<str.length();i++) {
            char ch = str.charAt(i);
            if(isVowel(ch)){
                count++;
            }
        }
        System.out.println(count);
    }
    
}