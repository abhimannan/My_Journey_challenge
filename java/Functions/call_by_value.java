package Functions;
// call by value example
// java is always call by value
public class call_by_value {
    public static void ChangeA(int a){
         a=10;
         System.out.println(a);
    }
    public static void main(String[] args) {
        int a = 5;
        ChangeA(a);
        System.out.println(a);
    }
}
        