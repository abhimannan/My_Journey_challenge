public class Replace {
    public static void replace(String name) {
        StringBuilder sb = new StringBuilder();
        int N = name.length();
        for(int i=0;i<N;i++) {
            char ch = name.charAt(i);
            if(ch==' ') {
                 sb.append("%20");
            }
            else{
                sb.append(ch);
            }
        }
        System.out.println(sb);
    }
    public static void main(String[] args) {
        String name ="I love coding";
        replace(name);
    }
}
