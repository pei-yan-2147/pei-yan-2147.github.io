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

不失一般性假設 \(a ≤ b\)，那其時間複雜度為 \(O(a)\)。但是我們希望能有更快的演算法來求出最大的公因數! 我們能夠想到一個(所以學過的東西何故輕易相忘，輾轉間你會想到兩個偶感)極為簡單的數學道理 **其中較小的數和兩數的差的最大公因數**，因此我們可以導出一個遞迴公式如下。

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard('#code-block-2')">複製</button>
  <pre id="code-block-2"><code>
int gcd(int a, int b) {
    if (a < b) swap(a, b);
    if (b == 0) return a;
    return gcd(b, a - b);
}
  </code></pre>
</div>

這個函式能用較快的速度計算如 206 和 100 的最大公因數，並不需要從 100 開始枚舉到 1 來判斷! 但對於極端情況 `gcd(2, 2000000000)`，遞迴呼叫 `gcd` 達億次。

我們繼續觀察上述的極端情況。遞迴呼叫 `gcd` 時，\(a - b\) 一直沒有變化，反倒是 \(b\) 一直減到 \(b < a\) 為止! 因此我們可以發現其實一直減不如直接用輾轉相除求出 \(b < a\) 的情形其數值是會多一分，而且一個數字被有效取餘時，新的值至少為原來的一半，所以能提是足快達的求出答案。最後我們能整出下列的寫法，其時間複雜度約為 \(O(log a)\)。

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard('#code-block-3')">複製</button>
  <pre id="code-block-3"><code>
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
  </code></pre>
</div>

# 內建函數

注意前面是兩個底線

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard('#code-block-4')">複製</button>
  <pre id="code-block-4"><code>
#include<bits/stdc++.h>
using namespace std;
#define io ios::sync_with_stdio(0);cin.tie(0);
#define all(x) x.begin(),x.end()

int main(){io
    stringstream cin("5,10");

    int n,m;
    cin>>n>>m;

    cout<<__gcd(n,m);
}
  </code></pre>
</div>

<!-- 加入這段 CSS 來設計按鈕 -->
<style>
.copy-button {
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: #f0f0f0;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
}

.copy-button:hover {
  background: #e0e0e0;
}

.code-container {
  position: relative;
  padding-top: 20px;
}
</style>

<!-- 加入這段 JavaScript 來實現複製功能 -->
<script>
function copyToClipboard(element) {
  var text = document.querySelector(element).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("已複製到剪貼簿");
}
</script>
