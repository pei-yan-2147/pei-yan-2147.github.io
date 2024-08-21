> from：2024清華大學IONC講義

# 函數製作

要設計一個演算法去計算 \(a, b\) 的最大公因數。最直觀的想法是枚舉所有可能的因數。

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard('#code-block-1')">複製</button>
  <pre id="code-block-1"><code>
int gcd(int a, int b) {
    for (int i = min(a, b); i >= 1; i--) {
        if (a % i == 0 && b % i == 0) return i;
    }
    return 1;
}
  </code></pre>
</div>
