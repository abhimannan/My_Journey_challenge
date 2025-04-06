public class Substring {
    public static String print(String friend,int index1,int index2) {
         String name = "";
         for(int i=index1;i<index2;i++) {
            name+=friend.charAt(i);
         }
         return name;
    }
    public static void main(String[] args) {
        String name = "Hello World";
        String x = name.substring(0,5);
        System.out.println(x);
        String frd = "Geetha Kumar Vijay Abhi";
        System.out.println(print(frd, 6, 10));
        // using predifined method
        System.out.println(frd.substring(0,6));


    }
}
