public class Equals {
    
    public static void main(String[] args) {
        // equals()
        String name1 = "abhi";
        String name2 = "abhi";
        boolean result = name1.equals(name2);
        System.out.println(result);
        // equalsIgnoreCase()
        String fruit1 = "Mango";
        String fruit2 = "mango";
        boolean m = fruit1.equals(fruit2);
        System.out.println(m);
        boolean result2 = fruit1.equalsIgnoreCase(fruit2);
        System.out.println(result2);

    }
}
