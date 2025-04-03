public class Practice {
    public static boolean Poli(String name) {
         int len = name.length();
         for(int i=0;i<len/2;i++) {
            if(name.charAt(i)==name.charAt(n-1-i)){
                return false;
            }
         }
         return true;
    }
    public static void main(String[] args) {
        String name = "madam";
        Poli(name);
    }
}
