import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import numpy as np

def make_chart(out_path: str) -> None:
    # Define the evaluation criteria and their approximate weights
    criteria = [
        "System Architecture", "Safety Case", "Capacity Performance", 
        "Communication Architecture", "Onboard Equipment", "Interface Management",
        "Past Performance - Deployments", "Past Performance - Schedule",
        "Project Management", "Schedule Realism", "Price", "Buy America Compliance"
    ]
    num_criteria = len(criteria)

    # Approximate weights based on article context
    weights = np.array([10, 10, 8, 6, 6, 5, 12, 8, 5, 8, 20, 5])

    # Hypothetical scores for two bids
    bid1_scores = np.array([9, 8, 7, 6, 5, 5, 11, 7, 5, 7, 18, 4])
    bid2_scores = np.array([8, 9, 6, 5, 6, 4, 12, 8, 4, 8, 19, 5])

    # Normalize scores by weights
    bid1_normalized = bid1_scores / weights
    bid2_normalized = bid2_scores / weights

    # Radar chart setup
    angles = np.linspace(0, 2 * np.pi, num_criteria, endpoint=False).tolist()
    bid1_normalized = np.concatenate((bid1_normalized, [bid1_normalized[0]]))
    bid2_normalized = np.concatenate((bid2_normalized, [bid2_normalized[0]]))
    angles += angles[:1]

    # Plot
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140, subplot_kw=dict(polar=True))
    ax.set_facecolor("#F4EFE6")

    ax.plot(angles, bid1_normalized, color="#0A1628", linewidth=2, label='Bid 1')
    ax.fill(angles, bid1_normalized, color="#D4A84B", alpha=0.25)

    ax.plot(angles, bid2_normalized, color="#1A1A1A", linewidth=2, label='Bid 2')
    ax.fill(angles, bid2_normalized, color="#D4A84B", alpha=0.25)

    ax.set_yticklabels([])
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(criteria, color="#0A1628", fontsize=10)

    plt.title("CBTC Bid Evaluation: Radar Chart (approximate / illustrative)", 
              color="#0A1628", weight='bold', fontsize=12, pad=20)
    ax.legend(loc='upper right', bbox_to_anchor=(1.1, 1.1))

    plt.tight_layout()
    plt.savefig(out_path, facecolor="#F4EFE6", bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
