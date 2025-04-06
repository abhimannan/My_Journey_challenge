public class CompareTo {
    public static void main(String[] args) {
        String str1 = "Mango";
        String str2 = "Banana";
        System.out.println(str1.compareTo(str2));
        int result = str1.compareTo(str2);
        if(result == 0) {
            System.out.println("Equal");
        }
        else if(result < 0) {
            System.out.println("str1 < str2");
        }
        else{
            System.out.println("str1 > str2");
        }
    }
}
