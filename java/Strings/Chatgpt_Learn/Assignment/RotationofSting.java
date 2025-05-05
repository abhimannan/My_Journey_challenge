public class RotationofSting {
    public static boolean RotationCheck(String s1,String s2) {
         if(s1.length()!=s2.length() || s1.length()==0){
             return false;
         }
         String Combine = s1+s1;
         return Combine.contains(s2);
    }
    public static void main(String[] args) {
        String s1 = "abcd";
        String s2 = "cdab";
        if(RotationCheck(s1, s2)){
            System.out.println("YES");
        }
        else{
            System.out.println("NO");
        }
    }
}