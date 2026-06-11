import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import numpy as np

def make_chart(out_path: str) -> None:
    # Define the data based on the article context
    stages = ['VOBC Processing', 'Uplink', 'ZC Processing', 'Downlink']
    min_times = [50, 50, 100, 50]  # in milliseconds
    max_times = [100, 200, 500, 200]  # in milliseconds

    # Calculate the average times for illustrative purposes
    avg_times = [(min_t + max_t) / 2 for min_t, max_t in zip(min_times, max_times)]

    # Define colors
    NAVY = "#0A1628"
    AMBER = "#D4A84B"
    CREAM = "#F4EFE6"

    # Create the plot
    plt.figure(figsize=(10, 5.5), dpi=140)
    plt.bar(stages, avg_times, color=NAVY, edgecolor=AMBER)

    # Title and labels
    plt.title('End-to-End Latency Budget Across Heartbeat Phases', color=NAVY, fontweight='bold')
    plt.xlabel('Heartbeat Phases', color=NAVY)
    plt.ylabel('Latency (ms)', color=NAVY)

    # Add gridlines
    plt.grid(axis='y', linestyle='--', linewidth=0.5, color=AMBER)

    # Set background color
    plt.gca().set_facecolor(CREAM)
    plt.gcf().set_facecolor(CREAM)

    # Tight layout
    plt.tight_layout()

    # Save the figure
    plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
