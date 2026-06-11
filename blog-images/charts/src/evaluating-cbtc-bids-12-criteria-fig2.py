import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import numpy as np

def make_chart(out_path: str) -> None:
    # Define colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"
    CHAR = "#1A1A1A"

    # Data extracted from the article context
    categories = ['Technical', 'Past Performance', 'Management & Schedule', 'Price']
    min_weights = [40, 20, 15, 20]
    max_weights = [50, 25, 20, 30]

    # Create figure and axis
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    fig.patch.set_facecolor(CREAM)

    # Plot data
    bar_width = 0.35
    indices = np.arange(len(categories))

    ax.bar(indices, min_weights, bar_width, color=NAVY, label='Minimum Weight')
    ax.bar(indices + bar_width, max_weights, bar_width, color=AMBER, label='Maximum Weight')

    # Title and labels
    ax.set_title('Typical US CBTC Bid Evaluation Weights', fontsize=14, fontweight='bold', color=NAVY)
    ax.set_xlabel('Evaluation Criteria', fontsize=12, color=CHAR)
    ax.set_ylabel('Weight (%)', fontsize=12, color=CHAR)

    # X-axis and Y-axis settings
    ax.set_xticks(indices + bar_width / 2)
    ax.set_xticklabels(categories, fontsize=10, color=CHAR)
    ax.set_yticks(np.arange(0, 61, 10))
    ax.set_yticklabels(np.arange(0, 61, 10), fontsize=10, color=CHAR)

    # Gridlines
    ax.yaxis.grid(True, linestyle='--', linewidth=0.5, color=CHAR, alpha=0.7)

    # Legend
    ax.legend(loc='upper right', fontsize=10, frameon=False)

    # Layout and save
    plt.tight_layout()
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
