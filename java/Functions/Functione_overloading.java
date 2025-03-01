public class Functione_overloading {
    // overloading using parameters
    public static int sum(int a,int b){
        return a+b;
    }
    public static int sum(int a,int b,int c){
        return a+b+c;
    }
    // overloading using different datatypes
    public static int mul(int a,int b){
         return a*b;
    }
    public static float mul(float a,float b){
         return a*b;
    }
    public static void main(String[] args) {
        System.out.println(sum(1,1));
        System.out.println(sum(1,1,1));
        System.out.println(mul(1,1));
        System.out.println(mul(1.2f,1.2f));
    }
}
