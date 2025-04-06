public class ConvertingUppercase {
    public static void main(String[] args) {
        String str = "hi,i am shradha";
        System.out.println(str);
        // String n = str.toUpperCase();
        char a = str.charAt(0).toUpperCase();
        for(int i=1;i<str.length();i++) {
            if(str.charAt(i)==' ') {
                str.charAt(i+1).toUpperCase();
            }
        }
        System.out.prinln(str);
    }
}
