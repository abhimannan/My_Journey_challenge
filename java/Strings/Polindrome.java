package Strings;

public class Polindrome {
    /*
    public static boolean CheckPolindrome(String name) {
        int n = name.length();
        for(int i=0;i<name.length()/2;i++) {
            if(name.charAt(i)!=name.charAt(n-1-i)){
                return false;
            }
        }
        return true;
    }*/
    public static boolean Poli(String name) {
         String rev = "";
         for(int i=(name.length()-1);i>=0;i--) {
             rev+=name.charAt(i);
         }
         if(name.toLowerCase().equals(rev.toLowerCase())) {
             return true;
         }
         else{
             return false;
         }
    }
     
    public static void main(String[] args) {
        String name = "madam";

        // System.out.println( CheckPolindrome(name));
        System.out.println( Poli(name));
    }
}
