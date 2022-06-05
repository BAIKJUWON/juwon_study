package Day1;

public class exam07 {
    public static void main(String[] args) {
        int inum = 10; //정수
        long lnum = 1000; //정수
        double fnum = 20.5; //실수

        int num1 = (int)lnum; //명시적 형 변환
        long num2 = inum; //자동 형 변환

        double num3 = inum; //실수로 변경
        System.out.println(num3);
    }
}
