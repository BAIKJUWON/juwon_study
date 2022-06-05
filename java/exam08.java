package Day1;

public class exam08 {
    public static void main(String[] args) {
        int i; //정수
        double f; //실수

        f = 5/ 4; // 정수로 나누기때문에 1.0 출력
        f = (double) 5 / 4; //double로 바꿔줌

        f = (int) 1.3 + (int) 1.8; //int형이라 2.0 출력
        System.out.println(f);

        //상수는 final int 이런식으로 쓴다.
    }
}
