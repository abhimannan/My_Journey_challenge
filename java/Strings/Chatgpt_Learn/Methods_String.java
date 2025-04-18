package My_Journey_challenge.java.Strings.Chatgpt_Learn;

public class Methods_String {
    public static void main(String[] args) {
        String name = "Abhi Mannan";
        System.out.println(name.length());
        // charAt(index)
        System.out.println(name.charAt(0));
        for(int i=0;i<name.length();i++) {
            System.out.print(name.charAt(i)+" ");
        }
        System.out.println();

        // substring(i, j)
        System.out.println("Vijay".substring(0,3));

        // equals()
        String s1 = "abhi";
        String s2 = "abhi";
        s1.toLowerCase();
        s2.toLowerCase();
        boolean result = s1.equals(s2);
        System.out.println(result);

        // compareTo()
        int res = s1.compareTo(s2);
        System.out.println(res);

        // indexOf('a')
        System.out.println("java".indexOf('a'));

        // toCharArray()
        String mother = "Geetha";
        char[] charArr = mother.toCharArray();
        System.out.println(charArr);

        // replace('a','b')
        String m = mother.replace(mother, "Kumar");
        System.out.println(m);
        System.out.println(" ".length());
        System.out.println("abc".compareTo("abd"));
        

    }
}
