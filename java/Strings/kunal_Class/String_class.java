package My_Journey_challenge.java.Strings.kunal_Class;

public class String_class {
    
    public static void main(String[] args) {
        String a = new String("kunal");
        String b = new String("kunal");
        System.out.println(a==b);// false
        // because it creates the new objects of a & b inside the heap and outside the string pool
        boolean res = a.equals(b);
        System.out.println(res);
        // charAt(index)
        String name = "Geetha";
        System.out.println(name.charAt(0));
        for(int i=0;i<name.length();i++) {
            System.out.println(name.charAt(i));
        }
    }
}
